import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP02 — 클라우드 공급자 또는 파트너의 지침 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>클라우드 공급자(AWS) 또는 인증된 파트너의 지침을 활용하여 아키텍처 패턴과 모범 사례를 학습하고 적용합니다. AWS 솔루션 아키텍트, AWS Solutions, AWS Quick Starts를 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>AWS 및 파트너의 전문 지식을 활용하여 검증된 아키텍처 패턴을 적용하고, 성능 최적화를 위한 모범 사례를 구현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>검증되지 않은 아키텍처로 처음부터 시작</li>
        <li>유사 사례 및 참조 아키텍처 검토 없이 설계 진행</li>
        <li>AWS 솔루션 아키텍트와 상담 없이 복잡한 아키텍처 결정</li>
        <li>커뮤니티 및 AWS 전문가의 경험을 활용하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>구현 시간 단축으로 빠른 시장 출시</li>
        <li>검증된 베스트 프랙티스 적용으로 품질 향상</li>
        <li>아키텍처 위험 감소</li>
        <li>AWS 전문 지식을 바탕으로 한 신뢰성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Solutions Library에서 워크로드 유형에 맞는 참조 아키텍처 검토</li>
        <li>AWS Well-Architected Review를 통해 아키텍처를 검토하고 개선 권고 적용</li>
        <li>AWS Partner Network의 검증된 파트너와 협력하여 전문 지식 활용</li>
        <li>AWS re:Post 커뮤니티에서 유사 사례 및 솔루션 검색</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Solutions Library — 검증된 솔루션 및 참조 아키텍처</li>
        <li>AWS Well-Architected Tool — 아키텍처 평가 및 개선</li>
        <li>AWS Partner Network — 검증된 파트너 솔루션 및 전문가</li>
        <li>AWS re:Post — 커뮤니티 기술 지식 공유</li>
      </ul>
      <PageNav />
    </article>
  );
}
