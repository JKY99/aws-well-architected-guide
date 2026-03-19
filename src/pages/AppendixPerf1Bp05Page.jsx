import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP05 — 상용 및 오픈소스 솔루션 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>직접 구현 전에 AWS Marketplace의 상용 솔루션과 오픈소스 소프트웨어를 평가하여 성능 최적화된 솔루션을 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 최적화된 기성 솔루션을 활용하여 개발 부담을 줄이고 빠른 시장 출시를 달성합니다. 직접 구현보다 검증된 솔루션을 적극적으로 검토하여 불필요한 개발 비용을 절감합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기존 솔루션 검토 없이 처음부터 직접 구현</li>
        <li>NIH(Not Invented Here) 증후군으로 외부 솔루션 거부</li>
        <li>상용 솔루션과 직접 개발의 TCO 비교 없이 결정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 시간 단축으로 빠른 비즈니스 가치 실현</li>
        <li>검증된 성능과 안정성 확보</li>
        <li>전문 벤더의 지원 및 업데이트 활용</li>
        <li>핵심 비즈니스 로직 개발에 집중 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Marketplace에서 워크로드 유형에 맞는 상용 솔루션 평가</li>
        <li>오픈소스 옵션의 성능, 커뮤니티 활성도, 라이선스 비교</li>
        <li>직접 구현 대비 TCO(총소유비용) 분석 수행</li>
        <li>프리 티어 또는 평가판으로 솔루션 성능 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Marketplace — 상용 소프트웨어 및 솔루션 검색</li>
        <li>Amazon EMR — 오픈소스 빅데이터 프레임워크 관리형 서비스</li>
        <li>Amazon OpenSearch Service — 오픈소스 검색 및 분석 엔진</li>
        <li>AWS Partner Network — 검증된 파트너 솔루션</li>
      </ul>
      <PageNav />
    </article>
  );
}
