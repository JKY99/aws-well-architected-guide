import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP04 — 새로운 서비스 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>
        새로 출시된 AWS 서비스나 기능이 비용을 절감하거나 성능을 향상시킬 수 있는지 정기적으로 평가합니다.
        AWS는 지속적으로 새로운 서비스와 기능을 출시하므로 이를 적시에 평가하고 적용하면
        상당한 비용 절감 효과를 얻을 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        새로운 AWS 서비스와 기능이 워크로드에 제공하는 비용 절감 및 성능 향상 기회를 신속하게
        파악하고 적용합니다. 최신 AWS 기술 혁신을 활용하여 경쟁력을 유지합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기존 아키텍처를 검토 없이 장기간 유지</li>
        <li>새로운 서비스 출시를 모니터링하지 않음</li>
        <li>새 서비스 평가 없이 구형 서비스의 더 비싼 요금제를 계속 사용</li>
        <li>PoC(개념 증명) 없이 새 서비스를 바로 프로덕션에 적용</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>새로운 저비용 서비스 도입으로 비용 절감</li>
        <li>관리형 서비스 활용으로 운영 오버헤드 감소</li>
        <li>최신 기술 혁신을 통한 성능 및 효율성 향상</li>
        <li>시장 변화에 빠르게 대응할 수 있는 민첩성 확보</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS What's New RSS 피드와 AWS 블로그를 구독하여 신규 서비스 출시 모니터링</li>
        <li>AWS re:Invent, re:Inforce 등 주요 행사 발표 내용을 평가 프로세스에 반영</li>
        <li>분기별 신규 서비스 평가 프로세스를 수립하고 비용-이익 분석 수행</li>
        <li>AWS Sandbox 환경에서 신규 서비스를 먼저 테스트하여 실제 비용 절감 효과 검증</li>
        <li>AWS Trusted Advisor와 Compute Optimizer 권장 사항을 활용하여 최적화 기회 식별</li>
        <li>기술 검토 위원회를 구성하여 새로운 서비스 도입 결정을 체계화</li>
        <li>도입 사례(Case Study)를 문서화하여 조직 내 지식 공유</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Trusted Advisor</li>
        <li>AWS Compute Optimizer</li>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Sandbox / AWS Organizations</li>
      </ul>

      <PageNav />
    </article>
  );
}
