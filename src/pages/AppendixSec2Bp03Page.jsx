import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP03 — 보안 비밀을 안전하게 저장하고 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 보안 비밀 노출로 인한 시스템 침해 위험이 높습니다.</p>
      </div>
      <p>
        워크로드에 필요한 보안 비밀을 식별하고, 가능한 경우 장기 자격 증명을 단기 자격 증명으로 대체합니다. 나머지 장기 자격 증명은 안전하게 저장하고 자동 교체를 설정합니다. 보안 비밀에 대한 접근을 감사하고 소스 코드에 비밀이 임베드되지 않도록 지속적으로 모니터링합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>보안 비밀이 저장 중, 전송 중 암호화</li>
        <li>API를 통해 자격 증명 접근 게이팅(자격 증명 자판기 모델)</li>
        <li>자격 증명 접근(읽기/쓰기)에 대한 감사 및 로깅</li>
        <li>소스 코드에 하드코딩된 자격 증명 없음</li>
        <li>자격 증명 교체가 별도 구성 요소에 의해 수행되는 관심사 분리</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자격 증명 미교체</li>
        <li>소스 코드 또는 구성 파일에 장기 자격 증명 저장</li>
        <li>저장 중 암호화 없이 자격 증명 보관</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명의 세분화된 접근 제어</li>
        <li>중앙에서 자동 교체되는 보안 비밀 배포</li>
        <li>자격 증명 교체를 수행하는 별도 구성 요소로 관심사 분리</li>
        <li>자격 증명 우발적 공개 가능성 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>제거(Remove), 대체(Replace), 교체(Rotate) 접근 방식을 따릅니다.</li>
        <li>Amazon CodeGuru를 사용하여 하드코딩된 자격 증명의 코드를 스캔합니다.</li>
        <li>더 이상 필요하지 않은 자격 증명을 제거하고, 장기 자격 증명을 IAM 역할을 사용한 임시 자격 증명으로 대체합니다.</li>
        <li>AWS Secrets Manager에 서드파티 및 장기 보안 비밀을 저장하고 자동 교체를 설정합니다.</li>
        <li>git-secrets 도구를 사용하여 코드베이스를 주기적으로 재스캔합니다.</li>
        <li>Secrets Manager 활동을 모니터링하여 예상치 못한 사용을 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Secrets Manager — 저장 암호화, 전송 암호화, 포괄적 감사, 세분화된 접근 제어, 자격 증명 교체</li>
        <li>Amazon CodeGuru — 보안 비밀 탐지기</li>
        <li>AWS KMS — 보안 비밀 암호화 키 관리</li>
        <li>IAM Roles Anywhere — 온프레미스 워크로드용 임시 자격 증명</li>
      </ul>
      <PageNav />
    </article>
  );
}
