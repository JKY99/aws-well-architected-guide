import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP01 — 애플리케이션 보안 교육</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        개발자, 아키텍트, 운영팀이 OWASP Top 10, CWE, 클라우드 네이티브 보안 취약점 등
        일반적인 보안 위협과 안전한 코딩 방법을 이해하도록 체계적으로 교육합니다.
        보안 지식이 없는 개발자는 의도치 않게 취약한 코드를 작성하게 됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 개발팀원이 OWASP Top 10과 같은 일반적인 보안 취약점을 이해하고, 안전한 코딩 패턴을
        일상적인 개발에 적용합니다. 역할에 따른 차별화된 보안 교육 과정이 있으며, 신규 입사자는
        온보딩 시 보안 교육을 이수합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>보안 교육을 연간 규정 준수 체크박스로만 취급하고 실무에 적용 가능한 내용을 제공하지 않음</li>
        <li>개발자에게 웹 애플리케이션 보안보다 클라우드 관련 보안(IAM, S3 정책 등)을 교육하지 않음</li>
        <li>AWS 서비스 특화 보안(Lambda 권한, API Gateway 인증 등)에 대한 교육이 없음</li>
        <li>교육 내용이 이론에 치우쳐 실습 환경에서 실제 취약점을 경험하고 수정하는 과정이 없음</li>
        <li>보안팀만 보안을 이해하고 개발팀은 보안을 '보안팀의 일'로 인식함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 초기에 보안 취약점을 예방하여 수정 비용과 보안 사고 위험 감소</li>
        <li>개발팀의 보안 자율성 향상으로 보안팀의 검토 병목 현상 해소</li>
        <li>보안이 품질의 일부라는 인식 확산으로 보안 문화 정착</li>
        <li>코드 검토와 보안 테스트의 효과성 향상</li>
        <li>보안 자격증 취득으로 팀 역량 공식 인증</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>OWASP WebGoat, Damn Vulnerable Web Application(DVWA), HackTheBox 등 취약한 애플리케이션을 활용한 실습 교육으로 개발자가 실제 취약점을 경험하도록 합니다.</li>
        <li>AWS의 보안 교육 리소스(AWS Security Learning Path, AWS re:Invent 보안 세션, AWS Skill Builder)를 팀 교육 계획에 포함합니다.</li>
        <li>역할별 교육 경로를 수립합니다. 개발자(안전한 코딩, OWASP), 아키텍트(AWS 보안 아키텍처), 운영팀(AWS 보안 서비스 운영)에 맞는 교육을 제공합니다.</li>
        <li>보안 챔피언 프로그램을 통해 각 팀에서 보안에 관심 있는 개발자를 선발하여 심화 교육을 제공하고, 팀 내 보안 지식의 전파자 역할을 맡깁니다.</li>
        <li>내부 보안 위키에 안전한 코딩 가이드라인, 자주 발생하는 취약점 사례, AWS 서비스별 보안 설정 체크리스트를 작성하고 최신 상태로 유지합니다.</li>
        <li>분기별 "보안 킬로파티(Kill Party)" 세션을 개최하여 실제 발생한 보안 사고나 취약점 사례를 팀과 공유하고 학습합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Skill Builder — AWS 보안 온라인 교육 과정 및 실습 환경</li>
        <li>AWS Security Hub — 보안 결과를 통한 실제 취약점 학습</li>
        <li>Amazon CodeGuru Security — AI 기반 코드 보안 취약점 탐지 및 학습</li>
        <li>AWS Well-Architected Tool — 아키텍처 보안 모범 사례 교육 자료</li>
        <li>OWASP 리소스 — 웹 애플리케이션 보안 취약점 교육 자료</li>
      </ul>
      <PageNav />
    </article>
  );
}
